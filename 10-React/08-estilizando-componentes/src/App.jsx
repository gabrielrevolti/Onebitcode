import Status from "./components/Status"
import { Subtitle } from "./components/Subtitle"
import Title from "./components/Title"
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.app}>
      <Title/>
      <Subtitle/>
      <Status/>
    </div>
  )
}

export default App
