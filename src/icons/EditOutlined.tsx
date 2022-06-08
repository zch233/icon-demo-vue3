// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import EditOutlinedSvg from '@ant-design/icons-svg/lib/asn/EditOutlined';

export interface EditOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const EditOutlined: EditOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={EditOutlinedSvg} />;

EditOutlined.displayName = 'EditOutlined';

export default EditOutlined;