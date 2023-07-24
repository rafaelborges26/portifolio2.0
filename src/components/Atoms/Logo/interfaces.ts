export interface ILogo extends ILogoStyles {
    logoImage: HTMLImageElement
    descriptionImage: string
}

export interface ILogoStyles {
    variant?: 'primary' | 'secondary'
}