// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AliwangwangOutlinedSvg from '@ant-design/icons-svg/lib/asn/AliwangwangOutlined';

export interface AliwangwangOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AliwangwangOutlined: AliwangwangOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AliwangwangOutlinedSvg} />
    ;

AliwangwangOutlined.displayName = 'AliwangwangOutlined';

export default FunctionalComponent;