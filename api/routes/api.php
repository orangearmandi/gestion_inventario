<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/hello', function () {
    return response()->json(['message' => 'Hello from API!']);
});

Route::controller(ProductController::class)->group(function(){
    Route::get('/products','index');
    Route::post('/products','store');
    Route::get('/products/{id}','show');
    Route::put('/products/{id}','update');
    Route::delete('/products/{id}','destroy');
});