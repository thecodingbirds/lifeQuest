/* Design/Plan of the webApp - lifeQuest:

# A game like setup to track the MAIN OBJECTIVE for week, DailySubMissions & SideQuests. 

:: MAIN OBJECTIVE -> Any task that is to be Completed for the stipulated TIME PERIOD of the level.
Time Period for the level would be the same as its number. Ex - levelOne has 1 week for completion, LevelTwo has two week for Completion and so on..

:: DAILY SUBMISSIONS -> These are certain activities that are to be tracked everyday.
Each activity needs to completed everyday for the TIME PERIOD of the level.

:: SIDE QUESTS -> These are the activities which can be done to get quick rewards. These are not needed to upgrade to the next level.

REWARD : for each level an award will be set and given on the completion of the level.

If the time period is completed then the app will check the activities done and then upgrade/repeat/degrade to the respective level.

Upgrade to the Next level -> If the main Objective is completed & DailySubMissions are completed.
Repeat the level -> If only one of the mainObjective or DailySubMissions is completed.
Degrade the level -> If neither of the mainObjective & DailySubmissions is completed.
*/

var level = prompt("What level is this?")
print(`&level`);
var mObj = prompt("What is the main Objective that you want to set for this level")
print(`&mObj`);