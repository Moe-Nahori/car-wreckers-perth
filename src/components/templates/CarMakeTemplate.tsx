import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CarMakeData } from '@/data/types'

interface CarMakeTemplateProps {
  data: CarMakeData
}

export function CarMakeTemplate({ data }: CarMakeTemplateProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{data.make} Parts & Wrecking Services</h1>
      
      <div className="mb-8">
        <p className="text-lg mb-4">{data.description}</p>
        <p className="text-sm text-gray-600">Australian Market Presence: {data.australianPresence}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Available Models</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {Object.entries(data.models).map(([key, model]) => (
          <Card key={key} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
              <p className="text-gray-600 mb-2">Years: {model.yearRange}</p>
              <p className="text-sm mb-4">Popular Parts:</p>
              <ul className="list-disc list-inside mb-4 text-sm">
                {model.popularParts.slice(0, 3).map((part, index) => (
                  <li key={index}>{part}</li>
                ))}
              </ul>
              <Link href={`/cars/${data.make.toLowerCase()}/${key}`} passHref>
                <Button className="w-full">View Parts</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Issues</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(data.commonIssues).map(([model, issues]) => (
          <Card key={model}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">{data.models[model].name}</h3>
              {issues.map((issue, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold text-lg">{issue.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{issue.description}</p>
                  <div className="text-sm">
                    <p>Affected Years: {issue.affectedYears.join(', ')}</p>
                    <p>Repair Difficulty: {issue.repairDifficulty}/5</p>
                    <p>Estimated Cost: ${issue.estimatedRepairCost}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us for {data.make} Parts?</h2>
            <ul className="space-y-2">
              <li>✓ Extensive range of genuine {data.make} parts</li>
              <li>✓ Expert knowledge of all {data.make} models</li>
              <li>✓ Competitive pricing and warranty on parts</li>
              <li>✓ Fast delivery across Perth metro area</li>
              <li>✓ Professional fitting advice available</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}