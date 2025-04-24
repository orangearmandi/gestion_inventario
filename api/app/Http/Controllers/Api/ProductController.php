<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{

    public function index()
    {
        $product = Product::all();
        return $product;
    }

    public function store(Request $request)
    {
        $product = new Product();
        $product->description = $request->description;
        $product->price = $request->price;
        $product->stock = $request->stock;
        $product->save();
        //
    }

    public function show(string $id)
    {
        $product = Product::find($id);
        return $product;
    }


    public function update(Request $request, string $id)
    {
        $product = Product::findOrFail($id);
        $product->description = $request->description;
        $product->price = $request->price;
        $product->stock = $request->stock;
        $product->save();
    
        return response()->json($product, 200);
    }
    

    public function destroy($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }
    
        $product->delete();
    
        return response()->json(['message' => 'Producto eliminado']);
    }
    
}
