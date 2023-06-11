import Nl2br from '@/src/components/Nl2br';
import { prisma } from '@/globals/db';

// 常に再生成
export const revalidate = 0;

export default async function Page() {
  const data = await prisma.metadata.findUniqueOrThrow({
    where: { key: 'tos' },
  });
  return (
    <main>
      <h1 className="my-2 text-xl">Terms of Service</h1>
      <p className="my-2 text-xs text-gray-50">The following text is a sample.</p>
      <Nl2br>{data.value}</Nl2br>
    </main>
  );
}
