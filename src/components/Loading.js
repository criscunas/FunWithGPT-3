import { CircularProgress } from "@material-ui/core"

export const Loading = () => {
  return (
    <div style = {{textAlign:"center", color : "green"}} >
      <CircularProgress color = "success" />
    </div>
  )
}