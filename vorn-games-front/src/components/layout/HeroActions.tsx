import { Button } from '../ui/Button'

export function HeroActions() {
  return (
    <div className="flex gap-[14px] items-center">
      <Button variant="primary" size="50" leftIcon={<img src="/icons/play.svg" alt="" />}>
        Подключить сервер
      </Button>
      <Button
        variant="outline"
        leftIcon={<img src="/icons/copy.svg" alt="" />}
        leftIconDark={<img src="/icons/copy.svg" alt="" />}
      >
        Скопировать IP адрес
      </Button>
    </div>
  )
}
