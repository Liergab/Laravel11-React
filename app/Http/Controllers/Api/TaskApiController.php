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

    public function getAllTask(){
        $task = Task::where('completed', false)->orderBy('created_at', 'desc')->get();
        return response()->json($task,200);
    }

    public function markAsDone($id) {
        $task = Task::find($id);
    
        if (!$task) {
            return response()->json(["message" => "Task not found"], 404);
        }
    
        $task->update(['completed' => true]);
    
        return response()->json(["message" => "Updated Task"], 200);
    }


    public function deleteTask($id){
        $task = Task::find($id);

        if (!$task) {
            return response()->json(["message" => "Task not found"], 404);
        }
    
        $task->delete();
        
        return response()->json(["message" => "Task remove"], 200);
    }
    
}
