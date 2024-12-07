import Image from 'next/image';
import type { FC } from 'react';

interface ProfileImageProps { }

const ProfileImage: FC<ProfileImageProps> = () => {
    return (
        <div className='flex w-full justify-center flex-col items-center'>
            <div className='rounded-full overflow-hidden border-0'>
                <Image src="/avatars/me.png" alt="" width="100" height="100" />
            </div>
            <p className=''>Issa Serhan</p>
            <select name="" id="" className='outline-none bg-transparent cursor-pointer text-slate-500'>
                <option value="" className=''>available</option>
                <option value="">busy</option>
            </select>
        </div>
    );
}

export default ProfileImage;
