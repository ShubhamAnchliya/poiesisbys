// part2  of ResourcesBlog

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function ResourcesBlogCard(props) {
    return (
        <>
            <div className="col-md-6">

                <div className="card flex-md-row mb-4 card-shadow h-md-250 blog_resourses_crd_container">

                    <div className="row mx-0">

                        <div className="col-md-8 pl-0">

                            <div className="card-body d-flex flex-column align-items-start p-2">

                                <strong className="d-inline-block mb-2 text-primary">
                                    <span className="blue_bg_lbl_badge">{props.label}</span>
                                </strong>

                                <h3 className="mb-0 font-600">
                                    {props.title}
                                </h3>

                                <div className="mb-1 text-777 font-13">{props.date}
                                    <span className="badge badge-info px-2 py-1 ml-2 font-500 font-13">Alex Smith</span>
                                </div>

                                <p className="card-text text-dark mb-auto mt-2">{props.description}</p>

                                <a href={props.link} className="btn btn-primary m-0 font-14 btn_rad_more_right px-0 mt-3">
                                    View More
                                    <span className="material-icons"><ArrowRightAltIcon /></span>
                                </a>

                            </div>

                        </div>

                        <div className="col-md-4 p-0">

                            <div className="blog_resourses_img_container card-shadow">
                                <img className="card-img-right flex-auto d-none d-md-block img-fluid" alt="Thumbnail [200x250]" src={props.image} data-holder-rendered="true" />
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            
        </>
    );
}
export default ResourcesBlogCard;

