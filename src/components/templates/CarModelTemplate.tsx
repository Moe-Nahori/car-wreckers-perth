import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CarMakeData } from '@/data/types'

interface CarModelTemplateProps {
  makeData: CarMakeData
  modelKey: string
  modelName: string
}

export function CarModelTemplate({ makeData, modelKey, modelName }: CarModelTemplateProps) {
  const modelData = makeData.models[modelKey]
  const modelIssues = makeData.commonIssues[modelKey]
  const compatibleModels = modelData?.compatibleModels ?? [];

  if (!modelData) {
    return <div>Model not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href={`/cars/${makeData.make.toLowerCase()}`} className="text-blue-600 hover:underline">
          ← Back to {makeData.make} Models
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6">{makeData.make} {modelName} Parts</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Model Information</h2>
            <div className="space-y-2">
              <p><strong>Year Range:</strong> {modelData.yearRange}</p>
              <div>
                <strong>Popular Parts:</strong>
                <ul className="list-disc list-inside mt-2">
                  {modelData.popularParts.map((part, index) => (
                    <li key={index}>{part}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <strong>Average Vehicle Value:</strong>
                <ul className="list-none mt-2">
                  <li>Poor Condition: ${modelData.averageValue.poor}</li>
                  <li>Fair Condition: ${modelData.averageValue.fair}</li>
                  <li>Good Condition: ${modelData.averageValue.good}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Common Issues</h2>
            <div className="space-y-4">
              {modelIssues.map((issue, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <h3 className="font-semibold text-lg">{issue.title}</h3>
                  <p className="text-gray-600 mb-2">{issue.description}</p>
                  <div className="text-sm">
                    <p>Affected Years: {issue.affectedYears.join(', ')}</p>
                    <p>Repair Difficulty: {issue.repairDifficulty}/5</p>
                    <p>Estimated Cost: ${issue.estimatedRepairCost}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-4">High Value Parts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {modelData.highValueParts.map((part, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">{part.name}</h3>
              <p className="text-gray-600 mb-2">{part.description}</p>
              <div className="text-sm">
                <p>Price: ${part.averagePrice}</p>
                <p>Condition: {part.condition}</p>
                <p>Availability: {part.availability}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {compatibleModels.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Compatible Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {compatibleModels.map((compatible, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {compatible.make} {compatible.model}
                  </h3>
                  <p className="text-sm mb-2">Years: {compatible.yearRange}</p>
                  <div className="text-sm">
                    <strong>Compatible Parts:</strong>
                    <ul className="list-disc list-inside mt-1">
                      {compatible.compatibleParts.map((part, partIndex) => (
                        <li key={partIndex}>{part}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Request {modelName} Parts</h2>
          <p className="mb-4">
            Looking for specific {makeData.make} {modelName} parts? Contact us for availability and pricing.
            We stock a wide range of genuine parts and offer competitive prices.
          </p>
          <div className="flex gap-4">
            <Link href="/quote" passHref>
              <Button>Get a Quote</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}