import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean; message: string }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: '' }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error?.message || 'Unknown runtime error' }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Portfolio runtime error:', error, info)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="error-screen">
        <div className="error-box">
          <div className="error-kicker">PORTFOLIO / RUNTIME ERROR</div>
          <h1>The page hit an error.</h1>
          <p>Open the browser console for the full stack trace.</p>
          <pre>{this.state.message}</pre>
          <button onClick={() => window.location.reload()}>RELOAD</button>
        </div>
      </div>
    )
  }
}
