<?php

namespace App\Http\Controllers\Api;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class TaskApiController extends Controller
{
    protected $todoModel;

    function __construct(){
        $this->todoModel = new Task();
    }

    public function saveTask(Request $request){
        $validator = $request->validate([
            'title'      => 'required|string|max:25',
            'description' => 'required|string'
        ]);

      

        $this->todoModel->createTask([
            'title' => $validator['title'],
            'description' => $validator['description']
        ]);

        return response()->json([
            'message' => 'Task Added'
        ], 201);

    }
}
