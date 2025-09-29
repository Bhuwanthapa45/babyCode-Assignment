import { HoverExpand_001 } from '@/components/ui/skiper-ui/skiper52'

// Using the hover expand component with custom images
const CustomHoverExpand = () => {
  const images = [
    {
      src: '/Speaking.png',
      alt: 'Speaking Test',
      code: '# 01',
    },
    {
      src: '/Reading.png',
      alt: 'Reading Test',
      code: '# 02',
    },
    {
      src: '/Vocaublary.png',
      alt: 'Vocaublary Test',
      code: '# 02',
    },
    {
      src: '/Listening.png',
      alt: 'Listening Test',
      code: '# 02',
    },
    {
      src: '/Writing.png',
      alt: 'Writing Test',
      code: '# 02',
    },
    // ... more images
  ]

  return <HoverExpand_001 images={images} className="" />
}
export { CustomHoverExpand }
