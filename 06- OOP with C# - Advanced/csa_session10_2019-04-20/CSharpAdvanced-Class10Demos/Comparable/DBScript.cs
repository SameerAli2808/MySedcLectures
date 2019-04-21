using System;

namespace Comparable
{
    public class DBScript : IComparable<DBScript>
    {
        public string Name { get; set; }

        public DBScript()
        {

        }

        public DBScript(string name)
        {
            Name = name;
        }

        public int CompareTo(DBScript other)
        {
            var versionsCurrent = this.Name.Split('_');
            var versionsOther = other.Name.Split('_');

            var dotCurrent = versionsCurrent[0].Split('.');
            var dotOther = versionsOther[0].Split('.');

            var dotCurrent01 = Convert.ToInt32(dotCurrent[0]);
            var dotCurrent02 = Convert.ToInt32(dotCurrent[1]);
            var dotCurrent03 = Convert.ToInt32(dotCurrent[2]);
            var dotCurrent04 = Convert.ToInt32(dotCurrent[3]);

            var dotOther01 = Convert.ToInt32(dotOther[0]);
            var dotOther02 = Convert.ToInt32(dotOther[1]);
            var dotOther03 = Convert.ToInt32(dotOther[2]);
            var dotOther04 = Convert.ToInt32(dotOther[3]);

            //var currentMain = Convert.ToInt32(versionsCurrent[0]);
            //var currentMinor = Convert.ToInt32(versionsCurrent[1]);

            //var currentOtherMain = Convert.ToInt32(versionsOther[0]);
            //var currentOtherMinor = Convert.ToInt32(versionsOther[1]);

            if (dotCurrent01 > dotOther01)
                return 1;
            else if (dotCurrent01 < dotOther01)
                return -1;
            else
            {
                if (dotCurrent02 > dotOther02)
                    return 1;
                if (dotCurrent02 < dotOther02)
                    return -1;
                else
                {
                    if (dotCurrent03 > dotOther03)
                        return 1;
                    if (dotCurrent03 < dotOther03)
                        return -1;
                    else
                    {
                        if (dotCurrent04 > dotOther04)
                            return 1;
                        if (dotCurrent04 < dotOther04)
                            return -1;
                    }
                }
            }

            return 0;
        }
    }
}