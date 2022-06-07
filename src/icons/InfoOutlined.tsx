// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import InfoOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoOutlined';

export interface InfoOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const InfoOutlined: InfoOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={InfoOutlinedSvg} />
    ;

InfoOutlined.displayName = 'InfoOutlined';

export default InfoOutlined;