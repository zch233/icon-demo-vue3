// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import GroupOutlinedSvg from '@ant-design/icons-svg/lib/asn/GroupOutlined';

export interface GroupOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const GroupOutlined: GroupOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={GroupOutlinedSvg} />
    ;

GroupOutlined.displayName = 'GroupOutlined';

export default GroupOutlined;