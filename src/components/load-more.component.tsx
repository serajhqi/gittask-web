import { Button } from "rsuite";

export default function LoadMore({ onClick, loading, disabled }: { onClick: () => void, loading: boolean, disabled?: boolean }) {
  return <Button appearance="primary" loading={loading} onClick={onClick} disabled={disabled}>More...</Button>
}