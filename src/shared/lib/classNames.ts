export const classNames = (className: string, mods: Record<string, boolean | string> = {}, additional: string[] = []): string => {
    return [
        className,
        ...Object.entries(mods)
            .filter(([cls, value]) => !!value)
            .map(([cls]) => cls),
        ...additional.filter(value => !!value),
    ].join(' ')

}