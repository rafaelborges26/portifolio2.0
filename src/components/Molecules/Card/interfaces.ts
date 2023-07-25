import { ILogo } from '@/components/Atoms/Logo/interfaces'

export interface ICard extends ILogo {
    title: string
    description: string
    labels: string[]
    link: string
}