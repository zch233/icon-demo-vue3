// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import UsergroupAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsergroupAddOutlined';

export interface UsergroupAddOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const UsergroupAddOutlined: UsergroupAddOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={UsergroupAddOutlinedSvg} />
    ;

UsergroupAddOutlined.displayName = 'UsergroupAddOutlined';

export default FunctionalComponent;