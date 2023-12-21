import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Todo } from './pages/Todo'
import { TasksContextProvider } from './context/TasksContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TasksContextProvider>
        <Todo />
      </TasksContextProvider>
    </ThemeProvider>
  )
}
