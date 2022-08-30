
function TestPMQuestions() {
    return (
        <>
            <div className="my-2 pb-3 border-bottom-gray w-100">
                <span className="float-left font-600 mr-3 font-18">1)</span>
                <h6 className="font-600 float-left">A thing in “Internet of Things” is:</h6>
                <form className="d-inline-block w-100 mt-3 mb-0">
                    <div className="radio01 mb-2">
                        <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"  />
                        A smart mundane object.
                        </label>
                    </div>
                    <div className="radio01 mb-2">
                        <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                        A Computer
                        </label>
                    </div>
                    <div className="radio01 disabled mb-2">
                        <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios4" value="option4" />
                        A Sensor
                        </label>
                    </div>
                    <div className="radio01 disabled mb-2">
                        <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios5" value="option5" />
                        A Actuator
                        </label>
                    </div> 
                </form>
            </div>        
            
        </>
    );
    
}
export default TestPMQuestions;