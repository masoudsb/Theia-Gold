export default function DateInput() {
    return (
        <>
        <div>
      <div className="text-gray-500" >
        Date of birth
      </div>
      <div className="mt-1 flex space-x-3">
        <select
          name="day"
          className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
          <option>23</option>
          <option>24</option>
          <option>25</option>
          <option>26</option>
          <option>27</option>
          <option>28</option>
          <option>29</option>
          <option>30</option>
          <option>31</option>
        </select>
        <select
          name="month"
          className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none"
        >
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
        <select
          name="year"
          className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none"
        >
          <option>1990</option>
          <option>1991</option>
          <option>1992</option>
          <option>1993</option>
          <option>1994</option>
          <option>1995</option>
          <option>1996</option>
          <option>1997</option>
          <option>1998</option>
          <option>1999</option>
          <option>2000</option>
          <option>2001</option>
          <option>2002</option>
          <option>2003</option>
          <option>2004</option>
          <option>2005</option>
          <option>2006</option>
          <option>2007</option>
          <option>2008</option>
          <option>2009</option>
          <option>2010</option>
          <option>2011</option>
          <option>2012</option>
          <option>2013</option>
          <option>2014</option>
          <option>2015</option>
          <option>2016</option>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
      </div>
    </div>
    <div>
      <div className="text-gray-500" >
        Gender 
      </div>
      <div className="mt-1 flex space-x-3">
        <label
         
          className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
        >
          <span>Female</span>
          <input type="radio" id="female" name="gender" />
        </label>
        <label
        
          className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
        >
          <span>Male</span>
          <input type="radio" id="male" name="gender" />
        </label>
        <label
       
          className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
        >
          <span>Custom</span>
          <input type="radio" id="other" name="gender" />
        </label>
      </div>
    </div>
          </>
        
    )
}