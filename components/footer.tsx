import { Heart } from '@/components/icons/heart'

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full p-6">
      <div className="flex items-center space-x-3 text-gray-400">
        <div className="h-6 w-6 opacity-50">
          <Heart />
        </div>
        <p className="text-sm">crafted with care and dedication.</p>
      </div>
    </footer>
  )
}
