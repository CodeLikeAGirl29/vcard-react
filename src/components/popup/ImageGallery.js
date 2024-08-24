import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';

const ImgView = ({ close, imgs }) => {
	const images =
		imgs.length > 0
			? imgs
			: [
					'images/works/work6.webp',
					'images/works/work1.webp',
					'images/works/work5.webp',
			  ];
	const [photoIndex, setPhotoIndex] = useState(0);

	return (
		<div className='postion-realtive'>
			<div
				className='mfp-bg mfp-fade mfp-ready'
				onClick={() => close()}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						close();
					}
				}}
				role='button'
				tabIndex={0}
			/>

			<div
				tabIndex={-1}
				style={{ overflow: 'hidden auto' }}
				className='mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready'
			>
				<div className='mfp-container mfp-s-ready mfp-image-holder'>
					<div
						className={`mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`}
					>
						<div className='mfp-content imgGallery_popup'>
							<div className='mfp-iframe-scaler'>
								<div className='img-container'>
									<Image
										src={images[photoIndex]}
										alt='img'
										width={100}
										height={100}
										className='mfp-img'
									/>
									{/* <div className="mfp-bottom-bar">
                    <div className="mfp-title" />
                    <div className="mfp-counter">
                      {photoIndex + 1} of {images.length}
                    </div>
                  </div> */}
								</div>
							</div>
						</div>
						<div className='mfp-preloader'>Loading...</div>
					</div>
					<button
						title='Previous (Left arrow key)'
						type='button'
						className='mfp-arrow mfp-arrow-left mfp-prevent-close'
						onClick={() =>
							setPhotoIndex((photoIndex + images.length - 1) % images.length)
						}
					/>
					<button
						title='Next (Right arrow key)'
						type='button'
						className='mfp-arrow mfp-arrow-right mfp-prevent-close'
						onClick={() => {
							setPhotoIndex((photoIndex + 1) % images.length);

							// console.log(photoIndex, images[photoIndex]);
						}}
					/>
				</div>
			</div>
		</div>
	);
};
const ImageGallery = () => {
	const [imgs, setImgs] = useState([]);
	const [view, setView] = useState(false);
	const [imgContainer, setImgContainer] = useState([]);
	useEffect(() => {
		setTimeout(() => {
			const imgGallery = document.querySelectorAll('.has-popup-gallery');
			for (let i = 0; i < imgGallery.length; i++) {
				const gallery = imgGallery[i];
				gallery.addEventListener('click', () => {
					setView(true);
					let mfpHideItem = gallery.getElementsByClassName('mfp-hide')[0];
					let img = mfpHideItem.getElementsByTagName('a');
					setImgContainer(img);
				});
			}
		}, 1000);
		let img_ = [];
		for (let i = 0; i < imgContainer.length; i++) {
			const element = imgContainer[i];
			let href = element.getAttribute('href');
			img_.push(href);
		}
		setImgs(img_);
	}, [view]);
	return (
		<Fragment>
			{view && (
				<ImgView
					imgs={imgs}
					close={() => {
						setView(false);
						setImgs([]);
					}}
				/>
			)}
		</Fragment>
	);
};
export default ImageGallery;
