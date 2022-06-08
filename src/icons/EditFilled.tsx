// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import EditFilledSvg from '@ant-design/icons-svg/lib/asn/EditFilled';

export interface EditFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const EditFilled: EditFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={EditFilledSvg} />;

EditFilled.displayName = 'EditFilled';

export default EditFilled;