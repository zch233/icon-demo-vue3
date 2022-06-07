// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ApiOutlinedSvg from '@ant-design/icons-svg/lib/asn/ApiOutlined';

export interface ApiOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ApiOutlined: ApiOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ApiOutlinedSvg} />
    ;

ApiOutlined.displayName = 'ApiOutlined';

export default FunctionalComponent;