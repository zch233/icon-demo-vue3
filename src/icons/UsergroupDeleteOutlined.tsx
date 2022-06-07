// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import UsergroupDeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsergroupDeleteOutlined';

export interface UsergroupDeleteOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const UsergroupDeleteOutlined: UsergroupDeleteOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={UsergroupDeleteOutlinedSvg} />
    ;

UsergroupDeleteOutlined.displayName = 'UsergroupDeleteOutlined';

export default FunctionalComponent;