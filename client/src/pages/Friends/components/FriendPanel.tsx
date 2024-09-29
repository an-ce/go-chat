import Avatar from '@/components/Avatar'
import { useContactStore } from '@/stores/contact'

import { UserSummary } from '@/types'
import request from '@/utils/request'
import clsx from 'clsx'
import { Delete, LogIn, MessageCircleMore } from 'lucide-react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const BASE = import.meta.env.VITE_APP_URL


type Props = {
	user: UserSummary | null
	onRemove: () => void
}

const btnClass = 'flex gap-2 border py-2 px-4 rounded-md hover:bg-gray-50 cursor-pointer'

const FriendPanel = ({ user, onRemove } : Props) => {
	const navigate = useNavigate()
	const { setActive, addContact } = useContactStore()

	const removeContacts = async (friendId:number) => {
		const res = await request({
			url: BASE + `/contacts/${friendId}`,
			method: 'DELETE'
		})

		if (res.success) {
			toast.success(res.message)
			onRemove()
		}
	}

	const sendMessage = (user:UserSummary) => {
		const contact = addContact(user)
		setActive(contact)
		navigate('/messages')
	}

	return (
		<div className="flex-grow flex flex-col gap-10 justify-center items-center">

		{
		user ?
			
			<>
				<div className='flex flex-col justify-center items-center gap-4'>
					<Avatar user={user} className='size-20'/>
					<div className='font-bold text-3xl'>{ user.username }</div>
					<div className='text-gray-500'>{ user.email }</div>
				</div>
				<div className='flex gap-5 items-center'>
					<div className={btnClass} onClick={() => sendMessage(user)}>
						<MessageCircleMore/> Send Message
					</div>
					<div className={btnClass}>
						<LogIn/> Login
					</div>
					<div className={clsx(btnClass, 'bg-red-500 hover:bg-red-400 text-white')} onClick={() => removeContacts(user.id)}>
						<Delete/> Remove
					</div>
				</div>
			</> :
			<div className='flex gap-2 items-center text-xl text-gray-400 font-bold'>
				<span className='bg-gray-400 text-white font-bold inline-block p-2 rounded-tl-xl rounded-br-xl'>Go</span>chat
			</div>
		}
		</div> 
	)
}

export default FriendPanel