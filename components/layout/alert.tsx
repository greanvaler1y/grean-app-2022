import Container from '@/components/layout/container';
import LocaleSwitcher from '@/components/misc/locale-switcher';

export default function Alert() {
  return (
    <div className="border-b bg-accent-1 border-accent-2">
      <Container>
        <div className="py-2 text-center text-sm">
          <LocaleSwitcher />
        </div>
      </Container>
    </div>
  );
}
