let isEqual = (that, obj) => {
    if (obj !== that)
    {
        if (typeof obj != typeof that)
            return false;
        if (obj instanceof Array && that instanceof Array)
            return obj.sort().toString() == that.sort().toString();
        if (typeof obj == 'object' && typeof that == 'object')
        {
            if (Object.keys(that).sort().toString() != Object.keys(obj).sort().toString())
                return false;
            for (let i of Object.keys(that))
                if (!isEqual(that[i], obj[i]))
                    return false;
            return true;
        }
        return false;
    }
    return true;
}

Object.isEqual = isEqual;
