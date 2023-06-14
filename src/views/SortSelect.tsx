import React, {useMemo, useState} from "react";
import RetroBoardActions from "../redux/actions/RetroBoardActions";
import {SortType} from "../redux/types/RetroBoardActionTypes";
import {Form, FormControl} from "react-bootstrap";
import SortSelectViewModel from "../viewmodel/SortSelectViewModel";

const SortSelect: React.FunctionComponent = () => {
    const vm = useMemo(() => new SortSelectViewModel(), []);
    const [sortSelectValue, setSortSelectValue] = useState(SortType.NONE)

    const handleSort = function (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        let sortBy = e.target.value
        let value = vm.publishSortEvent(sortBy);
        setSortSelectValue(value);
    }

    return <Form>
        <Form.Group>
            <Form.Label>Sort cards: </Form.Label>
            <FormControl as={"select"} onChange={(e) => handleSort(e)} data-testid={"sort_select"}
                         value={String(sortSelectValue)}>
                <option defaultValue={String(SortType.NONE)}>select...</option>
                <option defaultValue={String(SortType.SORT_BY_VOTES)}
                        value={SortType.SORT_BY_VOTES}>Sort by Up-votes
                </option>
            </FormControl>
        </Form.Group>
    </Form>
}

export default SortSelect;