<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Requests\CodeRequest;

class PersonalResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \App\Http\Requests\CodeRequest  $request
     * @return array
     */
    public function toArray(CodeRequest $request)
    {
        return $request->validated();
    }
}
