"use client"
import { useState } from 'react'
import {
  IconAdjustmentsHorizontal,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { apps } from './data/apps'
import Link from 'next/link'
import { ProjectsActionDialog } from '../projects/projects-action-dialog'

const appText = new Map<string, string>([
  ['all', 'All Categories'],
  ['ai', 'AI'],
  ['analytics', 'Analytics'],
  ['commerce', 'Commerce'],
  ['content', 'Content'],
  ['customer-support', 'Customer Support'],
  ['data', 'Data'],
  ['marketing', 'Marketing'],
])

export default function MyProjects() {
  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState('ascending')
  const [appType, setAppType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredApps = apps
    .sort((a, b) =>
      sort === 'ascending'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )
    .filter((app) =>
      appType === 'all' ? true : app.category === appType
    )
    .filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex h-[calc(100vh-10rem)] w-full max-w-7xl flex-col">
        {/* Fixed Content Section */}
        <div className="bg-background py-6">
          <div className='flex justify-between'>
            <div>
              <h1 className='text-2xl font-bold tracking-tight'>
                My Projects
              </h1>
              <p className='text-muted-foreground'>
                Manage your projects and applications
              </p>
            </div>
            <div>
              <Button variant={"default"} onClick={() => setOpen(true)}>Add Project</Button>
              <ProjectsActionDialog open={open} onOpenChange={setOpen} />
            </div>
          </div>
          <div className='my-4 flex items-end justify-between sm:my-0 sm:items-center'>
            <div className='flex flex-col gap-4 sm:my-4 sm:flex-row'>
              <Input
                placeholder='Search your projects...'
                className='h-9 w-40 lg:w-[250px]'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select value={appType} onValueChange={setAppType}>
                <SelectTrigger className='w-36'>
                  <SelectValue>{appText.get(appType)}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>All Categories</SelectItem>
                  <SelectItem value='ai'>AI</SelectItem>
                  <SelectItem value='analytics'>Analytics</SelectItem>
                  <SelectItem value='commerce'>Commerce</SelectItem>
                  <SelectItem value='content'>Content</SelectItem>
                  <SelectItem value='customer-support'>Customer Support</SelectItem>
                  <SelectItem value='data'>Data</SelectItem>
                  <SelectItem value='marketing'>Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className='w-16'>
                <SelectValue>
                  <IconAdjustmentsHorizontal size={18} />
                </SelectValue>
              </SelectTrigger>
              <SelectContent align='end'>
                <SelectItem value='ascending'>
                  <div className='flex items-center gap-4'>
                    <IconSortAscendingLetters size={16} />
                    <span>Ascending</span>
                  </div>
                </SelectItem>
                <SelectItem value='descending'>
                  <div className='flex items-center gap-4'>
                    <IconSortDescendingLetters size={16} />
                    <span>Descending</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator className='shadow' />
        </div>

        {/* Scrollable Cards Section */}
        <div className="flex-1 overflow-auto px-6 py-6">
          {filteredApps.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-semibold">No projects found</div>
                <div className="text-muted-foreground">Try adjusting your search or filters</div>
              </div>
            </div>
          ) : (
            <ul className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {filteredApps.map((app) => (
                <Link href={`/projects/${app.name}`} key={app.name}>
                  <li className='rounded-lg border p-4 hover:shadow-md'>
                    <div className='mb-8 flex items-center justify-between'>
                      <div className={`flex size-10 items-center justify-center rounded-lg bg-muted p-2`}>
                        {app.logo}
                      </div>
                      <div className="flex flex-col items-end">
                        <Button
                          variant='outline'
                          size='sm'
                          className="mt-2"
                        >
                          {app.category.toUpperCase()}
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h2 className='mb-1 font-semibold'>{app.name}</h2>
                      <p className='line-clamp-2 text-gray-500'>{app.desc}</p>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
