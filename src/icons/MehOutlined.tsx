// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MehOutlinedSvg from '@ant-design/icons-svg/lib/asn/MehOutlined';

export interface MehOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MehOutlined: MehOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MehOutlinedSvg} />
    ;

MehOutlined.displayName = 'MehOutlined';

export default FunctionalComponent;