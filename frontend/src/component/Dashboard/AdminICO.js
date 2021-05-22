import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getico } from "../../redux/actions/icoAction";

import UpcommingPool from "./UpcommingPool";
import CompletedPool from "./CompletedPool";

const AdminICO = () => {
  const { ico } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [pool, setPool] = useState([]);
  const [upcPool, setUpcPool] = useState([]);

  //pagination --------------------------------------
  //const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [currentBtn, setCurrentBtn] = useState(1);
  const [arrOfCurrBtn, setArrOfCurrBtn] = useState([]);


  useEffect(() => {
    dispatch(getico(currentBtn));
    setPool(ico.pool);
  }, [dispatch, ico.pool, currentBtn]);

  useEffect(() => {
    if (pool) {
      setUpcPool(
        pool.filter((x) => {
          return x.pool_type === "upcomming";
        })
      );
    }
  }, [pool]);

  
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrBtn];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (pages.length < 6) {
      tempNumberOfPages = pages;
    } else if (currentBtn >= 1 && currentBtn <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, pages.length];
    } else if (currentBtn === 4) {
      const sliced = pages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, pages.length];
    } else if (currentBtn > 4 && currentBtn < pages.length - 2) {
      // from 5 to 8 -> (10 - 2)
      const sliced1 = pages.slice(currentBtn - 2, currentBtn); // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = pages.slice(currentBtn, currentBtn + 1); // sliced1 (5, 5+1) -> [6]
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        pages.length,
      ]; // [1, '...', 4, 5, 6, '...', 10]
    } else if (currentBtn > pages.length - 3) {
      const sliced = pages.slice(pages.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentBtn === dotsInitial) {
      setCurrentBtn(arrOfCurrBtn[arrOfCurrBtn.length - 3] + 1);
    }
    else if (currentBtn === dotsRight) {
      setCurrentBtn(arrOfCurrBtn[3] + 2)
    }

    else if (currentBtn === dotsLeft) {
      setCurrentBtn(arrOfCurrBtn[3] - 2)
    }

    setArrOfCurrBtn(tempNumberOfPages);
    console.log(currentBtn);
  }, [currentBtn]);

  return (
    <div>
      <div id="tabs" className="admin">
        <div className="left-position">
          <ul className="tab-list">
            <li>
              <Link to="/admin/upcommingpool">Upcoming</Link>
            </li>
            <li>
              <Link to="/admin/completedpool">Completed</Link>
            </li>
            <li>
              <a href="#tabs-3">All</a>
            </li>
          </ul>
        </div>

        <div className="right-position">
          <ul>
            <li>
              <Link to="/admin/createico" className="create-btn">
                create ico
              </Link>
            </li>
            <li className="tab-listing">
              <a href="#gt" className="active list-all">
                <i className="fa fa-th-large" aria-hidden="true"></i>
              </a>
              <a href="#ff" className="list-tab">
                <i className="fa fa-list-alt" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        <br />
        <br />

        <Switch>
          <Route exact path="/admin/upcommingpool">
            <div id="tabs-1">
              <div className="upcoming-list">
                {upcPool.map((upcpool) => (
                  <UpcommingPool key={upcpool._id} upcpool={upcpool} />
                ))}
              </div>
            </div>
          </Route>
          <Route exact path="/admin/completedpool">
            <CompletedPool />
          </Route>
        </Switch>
      </div>

      {/* pagination */}
      <div className="pagintn">
        <div className="pagination">
          <p
            className=""
            onClick={() =>
              setCurrentBtn((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            &laquo;
          </p>
          {/* <p>1</p>
          <p className="active">2</p>
          <p>3</p> */}

          {arrOfCurrBtn.map((page, index) => (
            <p
              key={index}
              className={currentBtn === page ? "active" : ""}
              onClick={() => setCurrentBtn(page)}
            >
              {page}
            </p>
          ))}
          <p
            onClick={() =>
              setCurrentBtn((prev) => (prev === pages.length ? prev : prev + 1))
            }
          >
            &raquo;
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminICO;
