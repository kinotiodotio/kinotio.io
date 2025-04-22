import { Heart } from '@/components/icons'

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3 text-gray-400">
          <div className="h-6 w-6 opacity-50">
            <Heart />
          </div>
          <p className="text-sm">crafted with care and dedication.</p>
        </div>
        <div>
          <iframe
            src="https://kinotio.instatus.com/embed-status/6f8e5fad/light-sm"
            width="230"
            height="45"
            frameBorder="0"
            scrolling="no"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </footer>
  )
}
