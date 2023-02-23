const isDisplayOnlyCommand = (
  command: Command
): command is DisplayOnlyCommand => command.type === 'DisplayOnlyCommand'

const isActionCommand = (command: Command): command is ActionCommand =>
  command.type === 'ActionCommand'

export type DisplayOnlyCommand = {
  readonly type: string
  readonly command: string
  readonly description: string
  readonly jsx: JSX.Element
}

export type ActionCommand = {
  readonly type: string
  readonly command: string
  readonly description: string
  readonly executor: any
}
export type Command = DisplayOnlyCommand | ActionCommand

export { isDisplayOnlyCommand, isActionCommand }
