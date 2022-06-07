// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import QrcodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/QrcodeOutlined';

export interface QrcodeOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const QrcodeOutlined: QrcodeOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={QrcodeOutlinedSvg} />
    ;

QrcodeOutlined.displayName = 'QrcodeOutlined';

export default FunctionalComponent;