import React from 'react';
import './index.css';
import Cover from '../../../../components/Cover';
import Paper from '../../../../components/Paper';
import Rating from '../../../../components/Rating';
import ItemValue from '../../../../components/ItemValue';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';

function MovieDetail({
    detail,
    rating,
    released,
    director,
    stars,
    reviewer,
    name,
    image,
    onBackClick,
    onModalOpen,
    onModalClose,
    isModalOpen
}) {
    return (
        <div className="movie-detail">
            <Modal detail={detail} isOpen={isModalOpen} onClose={onModalClose} />
            <Paper type="detail">
                <header>
                    <h1 className="title">{name}</h1>
                    <div className="movie-detail--cover-wrapper">
                        <Cover src={image} />
                    </div>
                    <div className="movie-detail--rating">
                        <Rating rate={rating} />
                    </div>
                </header>
                <div className="movie-detail--content">
                    <div>
                        <ItemValue label="Released on" value={released} />
                    </div>
                    <div>
                        <ItemValue label="Director" value={director} />
                    </div>
                    <div>
                        <ItemValue label="Stars" value={stars} />
                    </div>
                    <div>
                        <ItemValue label="Reviewer" value={reviewer} />
                    </div>
                </div>
                <div className="movie-detail--buttons">
                    <div>
                        <Button primary onClick={onModalOpen}>View Detail</Button>
                        <Button onClick={onBackClick}>Back</Button>
                    </div>
                </div> 
            </Paper>
        </div>
    );
}

export default MovieDetail;