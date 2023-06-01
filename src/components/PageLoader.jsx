import { CircularProgress } from '@mui/material'

const PageLoader = () => {
    return (
        <div className="grid place-items-center h-screen">
          <CircularProgress color="primary" />
      </div>
  )
}

export default PageLoader