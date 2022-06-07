// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import FormOutlinedSvg from '@ant-design/icons-svg/lib/asn/FormOutlined';

export interface FormOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FormOutlined: FormOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={FormOutlinedSvg} />
    ;

FormOutlined.displayName = 'FormOutlined';

export default FormOutlined;