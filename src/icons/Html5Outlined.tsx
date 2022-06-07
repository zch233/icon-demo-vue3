// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import Html5OutlinedSvg from '@ant-design/icons-svg/lib/asn/Html5Outlined';

export interface Html5OutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const Html5Outlined: Html5OutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={Html5OutlinedSvg} />
    ;

Html5Outlined.displayName = 'Html5Outlined';

export default FunctionalComponent;