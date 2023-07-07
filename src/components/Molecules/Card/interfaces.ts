import { ILogo } from '@/components/Atoms/Logo/interfaces'
import {} from './'

export interface ICard extends ILogo {
    title: string
    description: string
    labels: string[]
}