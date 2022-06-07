// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import TeamOutlinedSvg from '@ant-design/icons-svg/lib/asn/TeamOutlined';

export interface TeamOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TeamOutlined: TeamOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={TeamOutlinedSvg} />
    ;

TeamOutlined.displayName = 'TeamOutlined';

export default TeamOutlined;