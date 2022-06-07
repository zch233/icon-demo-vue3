// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import OneToOneOutlinedSvg from '@ant-design/icons-svg/lib/asn/OneToOneOutlined';

export interface OneToOneOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const OneToOneOutlined: OneToOneOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={OneToOneOutlinedSvg} />
    ;

OneToOneOutlined.displayName = 'OneToOneOutlined';

export default OneToOneOutlined;