import { Loader } from '@mantine/core'
import './LoaderCatalog.css'

const LoaderCatalog = () => {
  return (
    <div className="loader">
      <Loader color="rgb(152, 84, 246)" size="lg" type="bars"/>
    </div>
  )
}

export default LoaderCatalog
