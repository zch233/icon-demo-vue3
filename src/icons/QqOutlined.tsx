// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import QqOutlinedSvg from '@ant-design/icons-svg/lib/asn/QqOutlined';

export interface QqOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const QqOutlined: QqOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={QqOutlinedSvg} />
    ;

QqOutlined.displayName = 'QqOutlined';

export default QqOutlined;