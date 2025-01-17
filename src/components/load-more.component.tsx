import { Button } from "rsuite";

export default function LoadMore({ onClick, loading }: { onClick: () => void, loading: boolean }) {
  return <Button appearance="primary" loading={loading} onClick={onClick}>More...</Button>
}